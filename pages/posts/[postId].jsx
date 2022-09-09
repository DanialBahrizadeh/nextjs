export default function PostDetails({ post }) {
  // only work when the fallback its true and this will return true if the page still not build and when building finish it will return false
  // small thing to note that if the data has been already fetch like if there is Link components that fetch this page this page will already been build and this will return false
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h2>
        {post.id}
        {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

// this is require when you are using dynamic url and you whanna make static pages
// just give the array of pathes that you want to be created
// remmber taht function will build page for each param in the paths array
/* 
    fallback acept 3 values false true, 'blocking' 
        on false value 
            1- The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps
            2- any paths not returned by getStaticProps will result in a 404 page
            When?
                1- The false value is most suitable if you have an application with a samll number of paths to prerender
                2- When new pages are not added often
                3- a blog site with a few articles is a good example for fallback set to false
        on true value 
            1- The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps (as false was)
            2- The paths that have not been generated at build time will not result in a 404 page, insted Next.js will serve a "fallback" version of the 
                page on the first request to such a path
            3- In the background, Next.js will statically generate the requested path HTML and JSON, This includes running getStaticProps
            4- When that's done, the browser receives the JSON for the generated path, This will be used to automatically render the page with the required props
                From the user's perspective, the page will swapped from the fallback page to the full page
            5- At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page,
                just like other pages pre-rendered at build time
            When? 
              The true value is most suitable if your app has a very large number of static pages that depend on data 
              A large e-commerce site

              You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time

              You may statically generate a small subset of products that are popular and use fallbakc: true for the rest

              When someone requests a page that's not generated yet, the user will see the page with a loading indicator

              Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then onwads,
              everyone who requests the same page will get the statically pre-rendered page

              This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation
        on 'blocking' value
          1- as false it's
          2- The paths that have not been generated at build time will not result in a 404 page, insted on the first request, Next.js
            will render the page on the server and return the generated HTML
          3- When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from 
          "the browser is requesting the page" to "the full page is loaded" There is no flash of loading/fallback state 
          4-.. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the genereated page
            just like other pages pre-rendered at build time

          When?
            On a UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few nilli seconds
            This helps avoid the layout shift

            Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which be loaded 
            which was causing a problem 

            (the next develpers recommend to use true and use blocking only if the was problem)
*/
export async function getStaticPaths() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();

  //   const paths = data.map((post) => ({
  //     params: { postId: String(post.id) },
  //   }));

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

// the bestpractices name is context you could use context to get the  params
export async function getStaticProps(context) {
  const { postId } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${postId}`);

  return {
    props: {
      post: data,
    },
  };
}
