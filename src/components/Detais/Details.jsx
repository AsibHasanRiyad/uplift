import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";


const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const eachService = data.find((service) => service.id == id);
  const {
    service_name,
    description,
    area,
    price,
    donation_goal,
    total_donation,
    location,
    image_url,
  } = eachService;
  const TABLE_HEAD = ["Donation Goal", "Donation Raised", "Donation Area", ""];
  const TABLE_ROWS = [
    {
      name: donation_goal,
      job: total_donation,
      date: location,
    }
  ];
  console.log(eachService);
  return (
    <div className=" grid grid-cols-6 mx-20 my-10 gap-5">
      <div className=" col-span-4 ">
        <div>
          <Card className="mt-6 w-full bg-transparent shadow-none">
            <CardHeader color="blue-gray" className="relative rounded">
              <img
                src={image_url}
                alt="card-image"
                className=" w-full rounded-sm "
              />
            </CardHeader>
            <CardBody className="">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {service_name}
              </Typography>
              <Typography>
                {description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className=" col-span-2">
      <Card className=" w-full overflow-scroll rounded">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-[#3BCF92] p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                   $ {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                   $ {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal flex justify-center items-center gap-2">
                   <FaLocationArrow ></FaLocationArrow> {date}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
      </div>
    </div>
  );
};

export default Details;
