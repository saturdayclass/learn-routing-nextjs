import { useRouter } from 'next/router';
function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // ...load data

    // Way 1
    // router.push('/client/muh/project-a');

    // Way 2
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'muh', clientprojectid: 'project-a' },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
