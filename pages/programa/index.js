import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import Theatres from '../../components/program/theatres';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Programa() {
  const { t } = useTranslation();

  const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
    },
    {
      title: 'Writing effective landing page copy',
      href: '#',
      description:
        'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
      date: 'Jan 29, 2020',
      datetime: '2020-01-29',
    },
  ];

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="/static/crescendo-middle.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className="absolute inset-0 bg-blueCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-greyCrescendo sm:text-5xl lg:text-6xl">
            Program
          </h1>
          <p className="mt-6 text-xl text-greyCrescendo max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
      <div className="bg-greyCrescendo pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-50 lg:max-w-7xl">
          <div>
            <h1 className="text-4xl font-extrabold text-coalCrescendo sm:text-5xl md:text-6xl">
              Press
            </h1>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-mossCrescendo">
                Get weekly articles in your inbox on how to grow your business.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-mossCrescendo">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-coalCrescendo">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-mossCrescendo">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base font-semibold text-greenCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out"
                  >
                    <h2>Read full story</h2>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Theatres />
    </Layout>
  );
}
