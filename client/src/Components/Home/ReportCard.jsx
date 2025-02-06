import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import img1 from '../../assets/images/card/1.png';
  import { useNavigate } from "react-router-dom";
  
  export function BookingCard({ image, title, description }) {
    
    const navigate = useNavigate();
    return (
   <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full min-h-[350px] max-w-[26rem] shadow-lg flex flex-col transition-transform transform hover:scale-105">
  <CardHeader floated={false} color="blue-gray" className="relative">
    <img
      src={image}
      alt={title}
      className="w-[1000px] h-[160px] object-cover" // Adjust the height as needed for the image
    />
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
  </CardHeader>
  <CardBody className="flex-1">
    <div className="mb-3 flex items-center justify-between">
      <Typography variant="h5" color="blue-gray" className="font-medium">
        {title}
      </Typography>
    </div>
    <Typography color="gray">
      {description}
    </Typography>
  </CardBody>
  <CardFooter className="pt-3">
    <Button size="lg" fullWidth={true} className="py-4 bg-black" 
     onClick={() => navigate("/reports")} >
      Report Crime
    </Button>
  </CardFooter>
</Card>

    );
  }
  