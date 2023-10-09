import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Slider() {
  return (
    <Carousel className=" h-[90vh]">
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/0ncHT4P/atul-pandey-0f3b-ZHXZSz8-unsplash.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/70">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Childhood is for dreams, not labor seams.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Child labour steals childhoods, robbing kids of education and play, perpetuating poverty and injustice.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button size="lg" color="white" className=" bg-[#3BCF92] text-white">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/3zKKYZd/ben-koorengevel-sju-Lx-UOEMY8-unsplash.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              End Hunger, Feed Hope
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Hunger is not just a problem; it is a call to action. It is a stark reminder that we have the power to make a difference in the lives of millions.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button size="lg" color="white" className=" bg-[#3BCF92] text-white">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/vV8fskf/katt-yukawa-K0-E6-E0a0-R3-A-unsplash.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Donations, big or small, change lives and unite hearts.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Donation is a powerful act of kindness that has the potential to transform lives and communities.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button size="lg" color="white" className=" bg-[#3BCF92] text-white">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}