import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { client } from '@/supabase';
import { getUserId } from '@/utilities/getUserId';
// Import statements remain the same

// Function to retrieve the last 7 records from the database
const getLast7Records = async () => {
  const userId = await getUserId();

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select('creation_time, message, subject, state, category(category)')
      .eq('id_profile', userId)
      .order('id', { ascending: false })
      .limit(7);

    if (error) {
      console.error(error);
      return []; // Return an empty array if an error occurs
    }

    return data || []; // Return data or an empty array
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an exception
  }
};

// Fetch the data and store it in a variable
const data = await getLast7Records(); // Removed type annotation as it's inferred
console.log(data);
// Adjust the ItemInterface to handle the category field properly
interface ItemInterface {
  creation_time: string;
  message: string;
  subject: string;
  state: string; // Added state based on the query
  category: { category: string }[]; // Define category as an array of objects with a 'category' string property
}

// Render the table using the updated ItemInterface
export default function Inbox(): JSX.Element {
  return (
    <div className="">
      <Table>
        {/* Table structure remains the same */}
        <TableCaption>Last 7 Pqrs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: ItemInterface, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium ">{item.state}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.message}</TableCell>
              <TableCell className="text-right">
                {item.category.length > 0
                  ? item.category[0].category
                  : 'No category'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
