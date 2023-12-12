import "./App.css";
import { useEffect, useState } from "react";
import { getPlaylist } from "./components/api/playlist";
import { AiFillClockCircle } from "react-icons/ai";
import styled from "styled-components";

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
    <Page>
      <Container headerBackground={false}>
        {playlist && (
          <>
            <div className='bkgdplaylist'>
              <div className='playlist'>
                <div className='details'>
                  <span className='type'>PLAYLIST</span>
                  <h1 className='title'>Blind 75</h1>
                  <p className='description'>
                    List of 75 interview questions in order
                  </p>
                </div>
              </div>
            </div>
            <div className='list'>
              <div className='header-row'>
                <div className='col'>
                  <span>#</span>
                </div>
                <div className='col'>
                  <span>TITLE</span>
                </div>
                <div className='col'>
                  <span>Difficulty</span>
                </div>
                <div className='col'>
                  <span>
                    <AiFillClockCircle />
                  </span>
                </div>
              </div>
              <div className='tracks'>
                {playlist.map(({ Difficulty, title, original_url }, index) => {
                  return (
                    <div
                      className='row'
                      onClick={() => {
                        window.open(original_url, "_blank");
                      }}
                    >
                      <div className='col'>
                        <span>{index + 1}</span>
                      </div>
                      <div className='col detail'>
                        <div className='info'>
                          <span className='name'>{title}</span>
                        </div>
                      </div>
                      <div className='col'>
                        <span>{Difficulty}</span>
                      </div>
                      <div className='col'>
                        <span>15 minutes</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </Container>
    </Page>
  );
}

const Page = styled.div`
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(32, 70, 60);
`;

const Container = styled.div`
  .bkgdplaylist {
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 70, 60);
  }
  .playlist {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 70, 60);
    .image {
      img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: #000000dc;
      background: rgba(0, 0, 0, 0.2);
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      background: linear-gradient(transparent, rgba(0, 0, 0, 1));
      background-color: rgba(0, 0, 0, 0.05);
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export default App;
