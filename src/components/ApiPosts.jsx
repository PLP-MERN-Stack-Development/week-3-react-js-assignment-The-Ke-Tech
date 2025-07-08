import { useEffect, useState } from 'react';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postsPerPage = 7;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://gnews.io/api/v4/search?q=football&lang=en&max=100&token=8187ee00c0733b1def25f3e9b6a67dca`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch news');
        }

        setPosts(data.articles || []);
      } catch (err) {
        setError(err.message || 'Failed to load news.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const paginated = filtered.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Football News</h2>

      <input
        type="text"
        placeholder="Search by title..."
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset to page 1 on search
        }}
      />

      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p className="text-gray-500">No posts found.</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((post) => (
          <div
            key={post.url}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded flex flex-col justify-between"
          >
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {post.description}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 text-sm mt-auto"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                page === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
