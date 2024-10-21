import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ReusableButtons } from "../reusableComponents/reusableButtons.tsx";
import axios from "axios";

export const QuizzApp = () => {
  const quizQuestions = [
    {
      question: "What is the name of our galaxy?",
      options: {
        a: "Andromeda",
        b: "Milky Way",
        c: "Sombrero",
        d: "Whirlpool",
      },
      answer: "b", // Correct answer
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: {
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: {
        a: "Earth",
        b: "Neptune",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "c",
    },
    {
      question: "What celestial body is at the center of our solar system?",
      options: {
        a: "Earth",
        b: "Mars",
        c: "The Sun",
        d: "The Moon",
      },
      answer: "c",
    },
    {
      question: "What is the nearest star system to Earth?",
      options: {
        a: "Sirius",
        b: "Alpha Centauri",
        c: "Proxima Centauri",
        d: "Betelgeuse",
      },
      answer: "c",
    },
    {
      question:
        "What is the term for a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction?",
      options: {
        a: "Galaxy",
        b: "Nebula",
        c: "Star Cluster",
        d: "Black Hole",
      },
      answer: "a",
    },
    {
      question: "Which planet is known for its rings?",
      options: {
        a: "Jupiter",
        b: "Mars",
        c: "Saturn",
        d: "Uranus",
      },
      answer: "c",
    },
    {
      question: "What is a supernova?",
      options: {
        a: "A type of black hole",
        b: "A massive explosion of a star",
        c: "A star formation region",
        d: "A type of galaxy",
      },
      answer: "b",
    },
    {
      question: "Which planet has the most moons?",
      options: {
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
      },
      answer: "c",
    },
    {
      question:
        "What is the term for a hypothetical region of space where the gravitational pull is so strong that nothing can escape from it?",
      options: {
        a: "Wormhole",
        b: "Black Hole",
        c: "Neutron Star",
        d: "White Dwarf",
      },
      answer: "b",
    },
  ];

  const [question, setQuestion] = useState<number>(0);
  const [answer, setanswer] = useState<string>("");
  const [rightAnswer, setrightAnswer] = useState<number>(0);
  const [isAnswered, setisAnswered] = useState<boolean>(false);
  const [hasAnswred, sethasAnswred] = useState<boolean>(false);
  const [hideQuestion, sethideQuestion] = useState<boolean>(true);

  const nextQ = () => {
    setisAnswered(false);
    if (!hasAnswred) {
      alert("please select answer");
      return;
    }
    if (question < quizQuestions.length - 1) {
      setQuestion((a) => a + 1);
      setanswer("");
    } else {
      alert("You just finshed the test");
      sethideQuestion(false);
    }
    sethasAnswred(false);
  };

  const add = (a: number, b: number) => ({
    sum: a + b,
  });

  const selectAns = (ans: any) => {
    setanswer(ans);
    sethasAnswred(true);
    if (ans === quizQuestions[question].answer && !isAnswered) {
      setrightAnswer((a) => a + 1);
      setisAnswered(true);
    }
    if (ans !== quizQuestions[question].answer && isAnswered) {
      setrightAnswer((a) => a - 1);
      setisAnswered(false);
    }
  };

  return (
    <div className="mt-[2rem] border-2">
      {hideQuestion && (
        <>
          {/* <img src="https://github.com/ralphfromthesky/images/blob/main/1.jpg?raw=true" /> */}
          <div className="text-center mb-[1rem] text-[2.5rem] font-bold">
            Simple QuizzApp
          </div>
          <div className="flex justify-end">
            question {question} / {quizQuestions.length}
          </div>
          {/* {question} / {quizQuestions.length} - {answer}
          {quizQuestions[question].answer} - {rightAnswer} */}
          <div className="text-[2rem] font-bold">
            {quizQuestions[question].question}
          </div>
          <div>
            {Object.entries(quizQuestions[question].options).map(([a, b]) => (
              <div
                key={a}
                onClick={() => selectAns(a)}
                className={answer === a ? "bg-[#ecebeb]" : ""}
              >
                {a}: {b}
              </div>
            ))}
          </div>
          <div>
            {answer && (
              <ReusableButtons
                title="Next Question"
                bg="blue"
                height="2.5rem"
                width="100%"
                color="white"
                func={nextQ}
              />
            )}
          </div>
        </>
      )}

      {!hideQuestion && (
        <>
          <div className="text-center text-[2rem] font-bold">
            congratulation! <br />
            you got {rightAnswer} out of 10!
            {rightAnswer <= 5 ? (
              <>
                <div className="flex flex-col justify-center">
                  you failed
                  <div className="flex justify-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerNfJr-vJiOL5j90bVNFehH8_y8U2U_DR5g&s"
                      alt=""
                      className="h-[20rem] w-[20rem] "
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center">
                  you pass!
                  <div className="flex justify-center">
                    <img
                      src="https://i.pinimg.com/originals/86/d1/76/86d1767ba3ecb6af8df3e4e5dda376eb.gif"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const TodoApss = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, settodoList] = useState<Array<{ content: string }>>([]);

  const addTodo = () => {
    if (todo === "") {
      alert("dont leave vblank");
      return;
    }
    // settodoList((a) => [...a, { content: todo }]);
    const newTodo = [...todoList, { content: todo }];
    settodoList(newTodo);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const handleChange = (index: number, newValue: string) => {
    const updatedTodos = todoList.map((todoItem, i) =>
      i === index ? { ...todoItem, content: newValue } : todoItem
    );
    settodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodos = (content: string) => {
    settodoList((todos) => {
      const updatedTodos = todos.filter((todo) => todo.content !== content);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  useEffect(() => {
    const storedTodo = localStorage.getItem("todos");
    if (storedTodo) {
      try {
        settodoList(JSON.parse(storedTodo));
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  return (
    <div>
      <div className="border-2 rounded flex flex-col p-1">
        <div className="text-[2rem] font-bold text-center">
          Simple todo apps
        </div>
        <input
          type="text"
          className="border-2 border-emerald-500 h-[3rem] rounded-[.5rem] my-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-blue h-[2rem] bg-emerald-500 text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col">
        {todoList.map((a, b) => (
          <>
            <div className="flex">
              <input
                type="text"
                key={b}
                value={a.content}
                onChange={(e) => handleChange(b, e.target.value)}
              />
              <button
                className="bg-[#64d48a] text-white p-1 rounded-[.5rem]"
                onClick={() => deleteTodos(a.content)}
              >
                DEL
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export const WeatherApp = () => {
  const [city, setCity] = useState<string>("");
  const api_key = "ae3335d94a1cbbff33e8ba9bab5de492";
  const htttps = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const [datas, setData] = useState<WeatherData | null>(null);
  const [errorers, setError] = useState<string | null>("");

  interface WeatherData {
    weather: string;
    main: {
      temp: number;
      humidity: number;
    };
    name: string;
    message: string;
  }
  const searchCity = () => {
    if (city === "") {
      alert("pls input city");
      return;
    }
    refetch();
    setCity("");
  };

  const { refetch, data, isLoading, isFetching, isError, error } =
    useQuery<WeatherData>({
      queryKey: ["city"],
      enabled: false,
      queryFn: async () => {
        try {
          const response = await axios.get(htttps);

          if (response.data.cod === "404") {
            setError(response.data.message);
            return null;
          } else {
            setError(null);
            setData(response.data);
            return response.data;
          }
        } catch (err: any) {
          setError(err.response?.data?.message || "An error occurred");
          throw new Error(err);
        }
      },
    });

  return (
    <div>
      <div className="text-center flex flex-col">
        <div className="text-[2rem] font-bold text-blue-600">
          Simple Weather apps
        </div>
        {isFetching ? (
          <div className="flex justify-end">Loading...</div>
        ) : (
          <div className="flex justify-end">Weather fetched!</div>
        )}

        <input
          type="text"
          value={city}
          className="border-2 border-[green] h-[3rem] rounded-[.5rem] my-2"
          onChange={(e) => setCity(e.target.value)}
        />
        {errorers}
        <ReusableButtons
          title="Search Weather"
          bg="green"
          height="2.5rem"
          width="100%"
          color="white"
          func={searchCity}
        />
      </div>

      {datas ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[1.5rem] font-bold">
                Country: {datas?.name}
              </span>
              <span className="text-[1.2rem]">
                weather: {datas?.weather[0]?.main}
              </span>
              <span className="text-[1rem]">temp: {datas?.main?.temp}</span>
            </div>
            <div>
              {datas?.weather[0].main === "Rain" && (
                <span className="text-[1rem] font-bold">
                  the weather is Raining!
                </span>
              )}

              {datas?.weather[0].main === "Clear" && (
                <span className="text-[1rem] font-bold">
                  the weather is Clear!
                </span>
              )}
              {datas?.weather[0].main === "Fog" && (
                <span className="text-[1rem] font-bold">
                  the weather is Foggy!
                </span>
              )}
            </div>
          </div>
          {datas?.weather[0].main === "Rain" && (
            <>
              <div>
                <img
                  src="https://thumbs.dreamstime.com/b/raindrops-window-pane-s-raining-outside-rainy-autumn-day-sun-shines-leaves-houseplant-196934806.jpg"
                  alt=""
                />
              </div>
            </>
          )}
          {datas?.weather[0].main === "Clear" && (
            <>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
                  alt=""
                />
              </div>
            </>
          )}
          {datas?.weather[0].main === "Fog" && (
            <>
              <div>
                <img
                  src="https://static.wikia.nocookie.net/weather/images/f/fc/Fog.jpeg/revision/latest/scale-to-width-down/500?cb=20120804193216"
                  alt=""
                />
              </div>
            </>
          )}
        </>
      ) : (
        "search for a country"
      )}
    </div>
  );
};

export const Calcu = () => {
  const [number, setnumber] = useState<number[]>([]);
  const [current, setcurrent] = useState<string>("");
  const [operator, setoperator] = useState<string>("");
  const [totalall, setTotal] = useState<string>("");

  const appendNums = (num: string) => {
    setcurrent((prev) => prev + num);
  };

  const addNumber = () => {
    if(current) {
      setnumber((prev) => [...prev, parseFloat(current)])
      setcurrent('')
    }
  }

  const setOperation  = (op: 'add') => {
    addNumber()
    setoperator(op)
  }

  const calculateTotal = () => {
    if (operator === 'add') {
      const total = number.reduce((acc, num) => acc + num, 0) + (current ? parseFloat(current) : 0);
      setTotal(total.toString());
      // clearInputs(); // Clear inputs after calculation
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-[2rem]">
       {number} Simple calculator{totalall}
      </div>
      <div>
        <div className="border-2 border-black h-[3rem] rounded-sm my-2 flex justify-center items-center font-bold">
          {current}
        </div>
        <div className="flex gap-1 flex-wrap">
          <span
            className="border-2 border-[black] p-5 rounded-md"
            onClick={() => appendNums("0")}
          >
            0
          </span>
          <span
            className="border-2 border-[black] p-5 rounded-md"
            onClick={() => appendNums("1")}
          >
            1
          </span>
          <span
            className="border-2 border-[black] p-5 rounded-md"
            onClick={() => appendNums("2")}
          >
            2
          </span>
          <span
            className="border-2 border-[black] p-5 rounded-md"
            onClick={() => appendNums("3")}
          >
            3
          </span>
          <span className="border-2 border-[black] p-5 rounded-md">4</span>
          <span className="border-2 border-[black] p-5 rounded-md">5</span>
          <span className="border-2 border-[black] p-5 rounded-md">6</span>
          <span className="border-2 border-[black] p-5 rounded-md">7</span>
          <span className="border-2 border-[black] p-5 rounded-md">8</span>
          <span className="border-2 border-[black] p-5 rounded-md">9</span>
          {/* <span
            className="border-2 border-[black] p-5 rounded-md"
          >
            -
          </span> */}
          <span className="border-2 border-[black] p-5 rounded-md" onClick={() => setOperation('add')}>+</span>
          {/* <span className="border-2 border-[black] p-5 rounded-md">/</span>
          <span className="border-2 border-[black] p-5 rounded-md">*</span>*/}
          <span className="border-2 border-[black] p-5 rounded-md" onClick={() => calculateTotal()}>=</span>
        </div>
      </div>
    </div>
  );
};

export const ArrayMethod = () => {

  const numbers = [1,2,3,4,5,6,7,8,9,10]

  const showEvenNUmber = (Num: number[]): number[] => {
    return Num.filter((a) => a % 2 === 0)
  }


  return (
    <>
    
    <div>
      {showEvenNUmber(numbers)}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, asperiores.
    </div>

    </>
  )
}
