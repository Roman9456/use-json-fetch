import useJsonFetch from '../hooks/useJsonFetch';

function Error() {
  const { loading, error } = useJsonFetch('http://localhost:7070/error', { method: 'GET' });
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <p>{String(error)}</p>
      )}
    </>
  )
}

export default Error;