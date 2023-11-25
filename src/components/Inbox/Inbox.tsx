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
import { useEffect, useState } from 'react';
// Import statements remain the same

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
  const [data, setData] = useState<ItemInterface[]>([]);

  useEffect(() => {
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
          setData([]); // Set empty data if an error occurs
        } else {
          setData(data || []); // Set fetched data or an empty array
        }
      } catch (error) {
        console.error(error);
        setData([]); // Set empty data in case of an exception
      }
    };

    getLast7Records();
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="bg-white shadow-sm border h-full rounded-md p-5 ">
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
