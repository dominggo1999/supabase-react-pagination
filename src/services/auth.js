import { auth, db } from '../config/firebase';

export const signUp = async (email, password, setError) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      email,
    });
    return {
      success: true,
    };
  } catch (err) {
    setError(err);
  }
};

export const signIn = async (email, password, setError) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return {
      success: true,
    };
  } catch (err) {
    setError(err);
  }
};

export const logout = async () => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export const simulateFetch = async () => {
  try {
    const res = await fetch('https://jsonplaceaholder.typicode.com/todos/1');
    const data = await res.json();

    return { data };
  } catch (error) {
    return { error: error.message };
  }
};
