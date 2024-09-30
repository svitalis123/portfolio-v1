import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';



const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};

const BlogPost = ({ post }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="bg-[#2c2824] border-gray-700 cursor-pointer h-full flex flex-col">
        <CardHeader className="p-0">
          <img src={post.image} alt="" className="w-full h-48 object-cover rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">{post.title}</h2>
          <p className="text-gray-300 text-sm">{post.description}</p>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center w-full">
            <Avatar className="h-8 w-8 mr-2 bg-[#3d3731] text-gray-100">
              <AvatarFallback>{getInitials(post.author)}</AvatarFallback>
            </Avatar>
            <TypewriterText text={post.author} />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      className="text-sm text-gray-300 inline-block"
      initial={{ width: 0 }}
      whileInView={{ width: 'auto' }}
      viewport={{ once: true }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BlogPosts = ({blogPosts}) => {
  return (
    <div className="bg-[#201d1b] max-w-[1330px] mx-auto text-gray-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blogs</h1>
      <p className="text-gray-300 mb-6 sm:mb-8">
        Discover insightful resources and expert advice from me.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;

// import React, { useRef } from 'react'
// import { motion, useScroll, useSpring, useTransform} from 'framer-motion';
// import { Card } from '@/components/ui/card';

// const BlogPosts = ({blogPosts}) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//   const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });
//   return (
//     <div className='h-full'>
//        <motion.section className="min-h-screen py-16 px-8 relative">
//       `  <motion.h2 
//           className="text-4xl font-bold mb-8"
//           // style={{ y: smoothY }}
//         >
//           Latest Blog Posts
//         </motion.h2>`
//           {blogPosts.map((post, index) => (
//             <motion.div
//               key={post.id}
//               className="mb-8"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <Card className="bg-[#492c49] text-[#ecc7bc] p-6 rounded-xl shadow-neumorphic-dark">
//                 <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
//                 <p>{post.excerpt}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.section>
      
//     </div>
//   )
// }

// export default BlogPosts
