// 動的ルート
// URLに/blog/aを入れると{ slug: 'a' }
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}

// SSG
// export async function generateStaticParams() {
//   const posts = await fetch("https://.../posts").then((res) => res.json());

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }));
// }
