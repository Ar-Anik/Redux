import image1 from "../img/icons/Frame.svg";
import image2 from "../img/icons/Vector (1).svg";
import image3 from "../img/icons/Vector (3).svg";

import { addbook } from "../redux/books/actions";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const InputData = () => {
  const [from, setFrom] = useState("Please Select");
  const [to, setTo] = useState("Plese Select");
  const [date, setDate] = useState("mm/dd/yy");
  const [guest, setGuest] = useState("Please Select");
  const [clss, setClss] = useState("Please Select");

  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      from === "Please Select" ||
      to === "Please Select" ||
      guest === "Please Select" ||
      clss === "Please Select" ||
      date === "mm/dd/yy"
    ) {
      alert("Please Full Up All Field");
    } else {
      if (books.length === 0) {
        let id = 1;
        dispatch(addbook(id, from, to, date, guest, clss));
      } else {
        let book = books[books.length - 1];
        let id = book.id + 1;
        dispatch(addbook(id, from, to, date, guest, clss));
      }
    }
  };

  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={image1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  value={from}
                  onChange={(event) => setFrom(event.target.value)}
                  id="lws-from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={image1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  value={to}
                  onChange={(event) => setTo(event.target.value)}
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>

            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={image2} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  value={guest}
                  onChange={(event) => setGuest(event.target.value)}
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src={image3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  value={clss}
                  onChange={(event) => setClss(event.target.value)}
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button
              className="addCity"
              type="submit"
              id="lws-addCity"
              onClick={handleSubmit}
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputData;
