import {CopyToClipboard} from 'react-copy-to-clipboard';

import './cardShareLink.css';
import { Button } from '@/components/ui/button';

function CardShareLink() {
  return <div>
    <div className=' card'>
      <h1>  Share this link with your clients !  </h1> 
        <p> ¡This is the link to the PQR form. Access the form here and share your feedback and requests with us!</p>
       
        <CopyToClipboard text="glenn"
          >
        <Button>Copy Url</Button>
        </CopyToClipboard>
         
        
        
    </div>
    
  </div>;
}

export default CardShareLink;
