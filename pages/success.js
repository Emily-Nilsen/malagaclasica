// import Image from 'next/image';
// import Link from 'next/link';
// import { CheckIcon } from '@heroicons/react/outline';
// import useTranslation from 'next-translate/useTranslation';

// export default function Success() {
//   const { t } = useTranslation();
//   return (
//     <div className="flex flex-col min-h-screen pt-6 sm:pt-16 sm:pb-12 bg-greyCrescendo">
//       <main className="flex items-start justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex flex-col p-20 bg-white rounded-md shadow">
//           <div className="flex justify-center flex-shrink-0">
//             <div>
//               <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
//                 <CheckIcon
//                   className="w-10 h-10 text-greenCrescendo"
//                   aria-hidden="true"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="py-16">
//             <div className="text-center">
//               <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-coalCrescendo sm:text-5xl">
//                 {t('common:sent')}
//               </h1>
//               <p className="max-w-xs mt-2 text-base text-mossCrescendo">
//                 {t('common:thanks')}
//               </p>
//               <div className="mt-6">
//                 <Link href="/" passHref>
//                   <a className="text-base font-medium transition duration-200 ease-in-out text-greenCrescendo hover:text-coalCrescendo">
//                     {t('common:button_back')}
//                     <span aria-hidden="true"> &rarr;</span>
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
