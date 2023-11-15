export default function SkeletonLoading() {
  const noOfSkeleton = 20;
  const skeletons = new Array(noOfSkeleton).fill(-1);

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="min-w-[15rem] w-60 h-[21rem] animate-pulse rounded-xl bg-neutral-800"
        />
      ))}
    </>
  );
}
