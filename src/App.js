import "./App.css";
import { useEffect, useState } from "react";
import { getPlaylist } from "./components/api/playlist";

function App() {
  // react hooks
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const playlist = await getPlaylist();
      setPlaylist(playlist);
    };

    getUsers(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  return (
    <div className='App'>
      <p>{JSON.stringify(playlist)}</p>
    </div>
  );
}

export default App;
