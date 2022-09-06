import { useRouter } from "next/router";

// its just like you say /docs/* if the page or route in the /docs route are not define will return this file
// if the name has two baraketes like that [[...params]] will include the /docs else its just /docs/*
export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  // on link docs/first/second/third it will return ['first', 'second', 'third']
  //   console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}
