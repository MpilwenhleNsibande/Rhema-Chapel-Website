export const fetchSermons = async () => {
    const response = await fetch('/api/sermons'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  };