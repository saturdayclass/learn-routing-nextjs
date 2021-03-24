import { useRouter } from 'next/router';

function SelectedProjectClient() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The project page for a specific project for Selected Client</h1>
    </div>
  );
}

export default SelectedProjectClient;
