import { Table } from '@several/primitives';

const TEMP_MEMBERS = [
  {
    name: 'Player #1',
    culvert: [10000, 8000, 6000, 7000],
  },
  {
    name: 'Player #2',
    culvert: [10000, 8000, 6000, 7000],
  },
  {
    name: 'Player #3',
    culvert: [10000, 8000, 6000, 7000],
  },
];

const COLUMNS = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Culvert',
    accessorKey: 'culvert',
  },
];

export default function Page() {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-semibold text-slate-12'>Members</h1>
        <p className='text-sm text-slate-11'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
      <Table columns={COLUMNS} data={TEMP_MEMBERS} />
    </>
  );
}
