```javascript
import Link from 'next/link';

function MyComponent() {
  //Use getServerSideProps or getStaticPaths to handle dynamic routes
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>      
    </div>
  );
}

export default MyComponent;
```