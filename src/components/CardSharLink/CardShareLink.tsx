import { CopyToClipboard } from 'react-copy-to-clipboard';

import './cardShareLink.css';
import { Button } from '@/components/ui/button';
import { getUserId } from '@/utilities/getUserId';
import { useEffect, useState } from 'react';

function CardShareLink() {
  const [url, setUrl] = useState(String);

  useEffect(() => {
    //

    const getId = async () => {
      const data = await getUserId();
      if (window.location.host == 'localhost:5173') {
        setUrl('http://localhost:5173/pqr/' + data + '/hq');
      } else {
        setUrl('https://requesthubhq.netlify.app/pqr/' + data + '/hq');
      }
    };
    getId();
  }, [url]);

  return (
    <div>
      <div className=" card">
        <h1> Share this link with your clients ! </h1>
        <p>
          {' '}
          ¡This is the link to the PQR form. Access the form here and share your
          feedback and requests with us!
        </p>

        <CopyToClipboard text={url}>
          <Button>Copy Url</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default CardShareLink;
