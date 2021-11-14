import { db } from '../config/firebase';

export const addTodo = async (title, description, user, setError) => {
  try {
    if(!user) {
      throw new Error('cred false');
    }

    const newTodo = {
      title,
      description,
      user: user.uid,
      finished: false,
    };

    await db.collection('todos').add(newTodo);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    setError(error);
    return {
      success: false,
    };
  }
};

export const updateTodo = async (title, description, todoId, user, setError) => {
  try {
    if(!user) {
      throw new Error('cred false');
    }

    const newTodo = {
      title,
      description,
    };

    const todoRef = await db.collection('todos').doc(todoId);

    await todoRef.update(newTodo);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    setError(error);
    return {
      success: false,
    };
  }
};

export const changeTodoStatus = async (status, todoId, user, setError) => {
  try {
    if(!user) {
      throw new Error('cred false');
    }

    const newTodo = {
      finished: status,
    };

    const todoRef = await db.collection('todos').doc(todoId);

    await todoRef.update(newTodo);

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    setError(error);
    return {
      success: false,
    };
  }
};

export const getTodos = async (uid) => {
  try {
    const todoListRef = db.collection('todos');

    const list = await todoListRef.where('user', '==', uid).get();

    const formattedData = await list.docs.map((i) => {
      return {
        id: i.id,
        ...i.data(),
      };
    });

    return {
      success: true,
      data: formattedData,
    };
  } catch (error) {
    return {
      sucess: false,
    };
  }
};

export const getSingleTodo = async (todoId) => {
  try {
    const todoListRef = await db.collection('todos');

    const data = await todoListRef.doc(todoId).get();

    return {
      success: true,
      data: data.data(),
    };
  } catch (error) {
    return {
      sucess: false,
    };
  }
};

export const deleteTodo = async (todoId) => {
  try {
    await db.collection('todos').doc(todoId).delete();
    return {
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
    };
  }
};
