import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useCantFind = (id, items, cantFind) => {
  const navigate = useNavigate();
  const [item, setItem] = useState(items);

  useEffect(() => {
    const foundItem = items.find((item) => item.id === id);
    if (!foundItem) {
      navigate(cantFind);
    } else {
      setItem(foundItem);
    }
  }, [id, items, navigate, cantFind]);

  return item;
};

export default useCantFind;
