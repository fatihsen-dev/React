import {useSelector} from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  return <div className='text-4xl'>{count}</div>;
}
