import { useNavigate } from "react-router-dom";
import useGetProblems from "../../hooks/problem/useGetProblems";

const ProblemList = () => {
  const { data, ref } = useGetProblems();
  const navigate = useNavigate();

  return (
    <div style={{overflow:'scroll'}}>
      <h1>문제</h1>
      {data ? (
        data.pages.map((page) => (
          <div key={page.pageable.pageNumber}>
            {page.content.map((problem) => (
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "1rem 10rem",
                }}
                key={problem.id}
                onClick={()=>{navigate(`/problems/${problem.id}`)}}
              >
                {problem.id} | {problem.title} | {problem.timeLimit} |{" "}
                {problem.memoryLimit} | {problem.correctRate}
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <div
        ref={ref}
        style={{ height: "1px", width: "100%", background: "red" }}
      />
    </div>
  );
};

export default ProblemList;
