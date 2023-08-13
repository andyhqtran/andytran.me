import 'react-json-view-lite/dist/index.css';

import { JsonViewer } from '~/components/JsonViewer';
import { getJobs } from '~/data/getJobs';

export default async function Page() {
  const jobs = await getJobs();

  return (
    <>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <>
          <h1>{job.jobName}</h1>
          <JsonViewer data={job} />
        </>
      ))}
    </>
  );
}
