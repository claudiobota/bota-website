import svgPaths from "./svg-pot1dbgvve";

function Group() {
  return (
    <div className="absolute inset-[1.24%_74.12%_0.42%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.46 265.47">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3676460} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p332e9700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0.36%_28.95%_33.47%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 678.59 191.82">
        <g id="Group">
          <path d={svgPaths.p167f4e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2df39900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2cecb500} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1fa94000} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[78.26%_0_0_33.52%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 681.78 58.67">
        <g id="Group">
          <path d={svgPaths.p20de7e40} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1dd95c80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p30536480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3ac15100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1fecae00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2ec6870} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p92d5b80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p5cd5680} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_0_33.47%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Light() {
  return (
    <div className="absolute contents inset-0" data-name="Light">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <Light />
    </div>
  );
}