import BeforeForwardRef from "./1_forwardRef/Before";
import AfterForwardRef from "./1_forwardRef/After";
import BeforeUseFetch from "./2_use/Before_Fetch";
import AfterUseFetch from "./2_use/After_Fetch";
import BeforeContext from "./2_use/Before_Context";
import AfterContext from "./2_use/After_Context";
import BeforeNoMemo from "./3_compiler/Before_NoMemo";
import BeforeMemo from "./3_compiler/Before_Memo";

function App() {
  return (
    <div>
      <h1>React 19</h1>
      <hr />
      {/* <h2>forwardRef</h2> */}
      {/* <BeforeForwardRef /> */}
      {/* <AfterForwardRef /> */}
      <h2>use</h2>
      {/* <BeforeUseFetch /> */}
      {/* <AfterUseFetch /> */}
      {/* <BeforeContext /> */}
      {/* <AfterContext /> */}
    </div>
  );
}

export default App;
