import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import TaskManager from '../components/TaskManager';
import ApiPosts from '../components/ApiPosts';

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {/* Welcome Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Welcome to My Website
        </h1>

        {/* Reusable Card with Buttons */}
        <Card content="This is a reusable card.">
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger" >Danger</Button>
          </div>
        </Card>

        {/* API Integration Section */}
        <ApiPosts />
      </div>
    </Layout>
  );
}
