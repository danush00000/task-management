export const fetchTasks = async () => {
  try {
    const res = await fetch('http://localhost:5000/tasks', {
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to load tasks');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
