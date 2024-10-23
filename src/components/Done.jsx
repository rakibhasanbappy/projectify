import Delete from "../SvgComponents/Delete";
import Edit from "../SvgComponents/Edit";
import Sort from "../SvgComponents/Sort";

export default function Done() {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-teal-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Done (1)</h3>
          <Sort />
        </div>

        <div>
          <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <div className="flex justify-between">
              <h4 className="mb-2 font-semibold text-teal-500">
                Content Writer
              </h4>
              <div className="flex gap-2">
                <Delete />
                <Edit />
              </div>
            </div>
            <p className="mb-2 text-sm text-zinc-200">
              {`Make Promotional Ads for Instagram fasto's`}
            </p>

            <p className="mt-6 text-xs text-zinc-400">February 20, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
