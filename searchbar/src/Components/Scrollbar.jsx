import React from "react";

const Scrollbar = () => {
  const [count, setCount] = React.useState(0);

  const debounce = (callback, delay) => {
    let debounceid;
    return function () {
      debounceid && clearTimeout(debounceid);
      debounceid = setTimeout(() => {
        callback();
      }, delay);
    };
  };
  const handleScroll = () => {
    setCount((prev) => prev + 1);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 1000));

    return () => {
      window.removeEventListener("scroll", debounce(handleScroll, 1000));
    };
  }, []);

  // it changes the value of count with respective to scroll up and down with scrooldown
  return (
    <div>
      <div style={{ position: "sticky" }}>Scrollbar count:{count}</div>
    </div>
  );
};

export default Scrollbar;
