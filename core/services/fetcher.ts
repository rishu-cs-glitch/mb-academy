type FetcherOptions = RequestInit & {
  auth?: boolean;
};

export async function fetcher<T>(endpoint: string, options: FetcherOptions = {}): Promise<T> {
  console.log("process.env.NEXT_PUBLIC_API_URL---", process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    throw {
      status: res.status,
      message: error?.message || "Something went wrong",
    };
  }

  return res.json();
}
