import Link from 'next/link';
function ClientPage() {
  const clients = [
    { id: 'rai', name: 'raihan' },
    { id: 'muh', name: 'muhammad' },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((data) => {
          return (
            <li key={data.id}>
              <Link href={`/client/${data.id}`}>{data.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientPage;
