import useJsonFetch from '../hooks/useJsonFetch';

function Loading() {
  const { loading } = useJsonFetch('http://localhost:7070/loading', { method: 'GET' });
  return (
    <>
      {loading &&
        <p>Loading</p>
      }
    </>
  )
}

export default Loading;