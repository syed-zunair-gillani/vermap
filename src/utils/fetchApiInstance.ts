export const fetchApiInstance = async ({ endpoint, data, method }: any) => {
  const URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/${endpoint}`;

  try {
    const response = await fetch(URL, {
      method: method || 'GET',  // Default to GET if no method is provided
      headers: {
        'Content-Type': 'application/json',
      },
      ...(data && method !== 'GET' && method !== 'HEAD' && { body: JSON.stringify(data) }), // Include body only for methods that support it
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch API Error: ", error);
    throw error;
  }
};
