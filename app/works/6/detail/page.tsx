export default function WorkPage(){

  return (
    <div className="w-full bg-white flex flex-col" style={{height: '100vh'}}>
      <iframe src="/detail/index.html" style={{height: '100%', width: '100%', border: 'none'}}/>
    </div>
  );
}