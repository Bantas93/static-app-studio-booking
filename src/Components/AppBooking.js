import { useState } from "react";
import { NavLink } from "react-router-dom";

const AppBooking = () => {
  const [studio, setStudio] = useState(0);
  const [studioRoom, setStudioRoom] = useState(0);
  const [lamaSewa, setLamaSewa] = useState(0);
  const [sesiRekam, setSesiRekam] = useState(0);
  const [banyakRekam, setBanyakRekam] = useState(0);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [bayar, setBayar] = useState(0);
  const [totalAll, setTotalAll] = useState(0);
  const [allState, setAllState] = useState();
  const setStudioValue = (event) => {
    setStudio(event.target.value);
  };

  const setStudioRoomValue = (event) => {
    setStudioRoom(event.target.value);
  };

  const setLamaSewaValue = (event) => {
    const val = event.target.value;
    if (val >= 0) {
      setLamaSewa(event.target.value);
    }
  };

  const sesiRekamValue = (event) => {
    setSesiRekam(event.target.value);
  };

  const setBanyakRekamValue = (event) => {
    const val = event.target.value;
    if (val >= 0) {
      setBanyakRekam(event.target.value);
    }
  };

  const handleChecked1 = (event) => {
    setIsChecked1(!isChecked1);
  };

  const handleChecked2 = (event) => {
    setIsChecked2(!isChecked2);
  };

  const handleChecked3 = (event) => {
    setIsChecked3(!isChecked3);
  };

  const handleTotalAll = () => {
    setTotalAll(
      parseInt(totalBookingStudio) +
        parseInt(totalBookingRecording) +
        parseInt(totalHargaAcc)
    );
  };

  const handleBayar = (event) => {
    const val = event.target.value;
    if (val >= 0) {
      setBayar(event.target.value);
    }
  };
  const clearState = () => {
    setAllState(
      setStudio(0),
      setStudioRoom(0),
      setLamaSewa(0),
      setSesiRekam(0),
      setBanyakRekam(0),
      setIsChecked1(false),
      setIsChecked2(false),
      setIsChecked3(false),
      setTotalAll(0),
      setBayar(0)
    );
  };

  const totalStudio = parseInt(studio) + parseInt(studioRoom);
  const totalBookingStudio = parseInt(totalStudio) * lamaSewa;
  const totalBookingRecording = parseInt(sesiRekam) * banyakRekam;

  //Harga Acc :
  const setPickGitar = 20000;
  const setStickDrum = 25000;
  const setSenarGitar = 65000;
  const totalHargaAcc =
    (isChecked1 ? setPickGitar : 0) +
    (isChecked2 ? setStickDrum : 0) +
    (isChecked3 ? setSenarGitar : 0);
  const kembali = bayar - parseInt(totalAll);
  return (
    <div>
      <h1 className="text-center">App Booking</h1>
      <div className="container-fluid p-5">
        {/* BAGIAN 1 START */}
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ border: "2px solid black" }}>
            <h6>Booking Studio</h6>
            <form>
              <div className="row">
                <div className="col-md-6">Nama / Band :</div>
                <div className="col-md-6">
                  <input />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">Pilih Studio :</div>
                <div className="col-md-8">
                  <input
                    type="radio"
                    value={80000}
                    name="studio"
                    onChange={setStudioValue}
                  />
                  Studio Deluxe <br />
                  <input
                    type="radio"
                    value={100000}
                    name="studio"
                    onChange={setStudioValue}
                  />
                  Studio Platinum
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">Ruang Studio:</div>
                <div className="col-md-6">
                  <select value={studioRoom} onChange={setStudioRoomValue}>
                    <option name="studioRoom" value={0}>
                      Pilih Room...
                    </option>
                    <option name="studioRoom" value={50000}>
                      Studio 1
                    </option>
                    <option name="studioRoom" value={30000}>
                      Studio 2
                    </option>
                    <option name="studioRoom" value={15000}>
                      Studio 3
                    </option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">Harga Sewa:</div>
                <div className="col-md-6">
                  <input type="text" value={totalStudio} disabled /> /Jam{" "}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">Lama Sewa:</div>
                <div className="col-md-6">
                  <input
                    type="number"
                    name="lamaSewa"
                    value={lamaSewa}
                    onChange={setLamaSewaValue}
                  />
                  /Jam
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">Total Harga:</div>
                <div className="col-md-6">
                  <input type="text" value={totalBookingStudio} disabled />
                </div>
              </div>
            </form>
          </div>
          {/* BAGIAN 1 END */}
          <div className="col-md-4" style={{ border: "2px solid black" }}>
            <h6>Booking Recording</h6>
            <div className="row">
              <div className="col-md-6">Nama / Band :</div>
              <div className="col-md-6">
                <input />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Alamat :</div>
              <div className="col-md-6">
                <input />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">No. Telepon :</div>
              <div className="col-md-6">
                <input type="number" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Sesi Rekaman :</div>
              <div className="col-md-6">
                <select value={sesiRekam} onChange={sesiRekamValue}>
                  <option name="Full-Track" value={0}>
                    Pilih Track...
                  </option>
                  <option name="Full-Track" value={300000}>
                    Full-Track
                  </option>
                  <option name="Middle-Track" value={200000}>
                    Middle-Track
                  </option>
                  <option name="Single-Track" value={150000}>
                    Single-Track
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Keterangan :</div>
              <div className="col-md-6">
                <textarea></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Harga Rekam :</div>
              <div className="col-md-6">
                <input value={sesiRekam} disabled />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Banyak Rekam :</div>
              <div className="col-md-6">
                <input
                  type="number"
                  onChange={setBanyakRekamValue}
                  value={banyakRekam}
                />
                /Jam/Lagu/Shift
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Total Rekam :</div>
              <div className="col-md-6">
                <input value={totalBookingRecording} disabled />
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ border: "2px solid black" }}>
            <h6>Band Accesories</h6>
            <div className="row">
              <div className="col-md-6">
                <p>Beli Accsesories :</p>
              </div>
              <div className="col-md-6 text-end">
                <label>
                  <p>Harga</p>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={handleChecked1}
                  />
                  Set Pick Gitar
                </label>
              </div>
              <div className="col-md-6 text-end">
                <label>
                  <p>{setPickGitar}</p>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleChecked2}
                  />
                  Set Stick Drum
                </label>
              </div>
              <div className="col-md-6 text-end">
                <label>
                  <p>{setStickDrum}</p>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    onChange={handleChecked3}
                  />
                  Set Senar Gitar
                </label>
              </div>
              <div className="col-md-6 text-end">
                <label>
                  <p>{setSenarGitar}</p>
                </label>
              </div>
            </div>
            <div
              className="row"
              style={{
                borderTop: "1px solid black",
              }}
            >
              <div className="col-md-6">Total Harga :</div>
              <div className="col-md-6 text-end">
                <p className="text-end">{totalHargaAcc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" style={{ border: "2px solid black" }}>
            <div className="m-3 p-3 text-center" style={{ width: "100%" }}>
              <button
                className="m-2 btn btn-light border-dark"
                onClick={handleTotalAll}
              >
                Hitung
              </button>
              <button
                className="m-2 btn btn-light border-dark"
                onClick={clearState}
              >
                Bersih
              </button>
              <button className="m-2 btn btn-light border-dark">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Keluar
                </NavLink>
              </button>
            </div>
          </div>
          <div className="col-md-6" style={{ border: "2px solid black" }}>
            <div className="row p-1">
              <div className="col-md-6">
                <p>Total Harga :</p>
              </div>
              <div className="col-md-4">
                <input value={totalAll} disabled></input>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-6">
                <p>Jumlah Bayar :</p>
              </div>
              <div className="col-md-4">
                <input type="number" onChange={handleBayar} value={bayar} />
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-6">
                <p>Uang Kembali :</p>
              </div>
              <div className="col-md-4">
                <input value={kembali} disabled></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span disabled>{allState}</span>
    </div>
  );
};

export default AppBooking;
