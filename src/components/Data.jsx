import useJsonFetch from '../hooks/useJsonFetch';

function Data() {
  const { loading, data } = useJsonFetch('http://localhost:7070/data', { method: 'GET' });
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </>
  )
}

export default Data;