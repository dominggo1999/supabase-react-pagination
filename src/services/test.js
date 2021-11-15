import faker from 'faker';
import { supabase } from '../config/supabase';

export const genData = async () => {
  const a = [];

  for (let i = 0; i < 200; i += 1) {
    const newUserData = {
      name: faker.name.findName(),
      email: faker.internet.email(),
    };

    a.push(newUserData);
  }

  try {
    const { data, error } = await supabase
      .from('costumers')
      .insert(a);

    if(error) throw new Error(error);
    if(!error) console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const costumersCount = async () => {
  try {
    const { data, error } = await supabase.rpc('costumers_count');

    if(!error) {
      return {
        data,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const getPagination = (total, page, size, pathname) => {
  // Count lastpage
  let lastPage = Math.ceil(total / size);
  lastPage = lastPage > 0 ? lastPage : 1;

  const p = parseInt(page, 10);

  if(Number.isNaN(p) || p > lastPage || p < 1) {
    console.log('Gew');
    return {
      err: true,
    };
  }

  const from = p === 1 ? 0 : (p - 1) * size;
  const to = p ? from + size : size;
  // console.log(from, to, p);

  return { from, to: to - 1 };
};

export const getData = async (params) => {
  const {
    currentPage,
    path,
    perPage,
    filter,
  } = params;

  try {
    const { error: errCount, count } = await supabase
      .from('costumers')
      .select('name', { count: 'exact', head: 'true' })
      .ilike('name', filter);

    const { from, to, err } = await getPagination(count, currentPage, perPage, path);

    if(err) {
      throw new Error(err.message);
    }

    if(count === 0) {
      console.log('no data fount');
      return {
        data: [],
        count: 0,
      };
    }

    const { data, error } = await supabase
      .from('costumers')
      .select()
      .range(from, to)
      .ilike('name', filter);

    if(!error) {
      console.log('users fetched');
      return {
        data,
        count,
      };
    }
  } catch (error) {
    return {
      error,
    };
  }
};
