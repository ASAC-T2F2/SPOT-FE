import Select from "react-select";
import useSignupForm from "../components/Signup/useSignupForm"; // Import the custom hook
import { Controller } from "react-hook-form";

export default function NextSignup() {
  const { register, handleSubmit, control, errors } = useSignupForm();

  const options = [
    { value: "컴퓨터공학과", label: "컴퓨터공학과" },
    { value: "경영학과", label: "경영학과" },
    { value: "경제학과", label: "경제학과" },
    { value: "정치외교학과", label: "정치외교학과" },
    { value: "수학과", label: "수학과" },
    { value: "정보통신공학과", label: "정보통신공학과" },
    { value: "전자공학과", label: "전자공학과" },
    { value: "통계학과", label: "통계학과" },
    { value: "건축학과", label: "건축학과" },
    { value: "생명공학과", label: "생명공학과" },
    { value: "화학과", label: "화학과" },
  ];
  const placeholder = "학과를 검색하세요.";

  return (
    <div className="flex flex-col py-8 px-5">
      <h2 className="text-2xl font-bold">회원 정보</h2>
      <div className="flex flex-col mt-12">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nickname" className="p-1 text-sm font-semibold">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임"
            className="w-full border border-gray-300 h-11 p-2 rounded-lg mb-5"
            {...register("nickname")}
          />
          {errors.nickname?.message && (
            <p className="text-red-500 mb-0">
              {errors.nickname?.message?.toString()}
            </p>
          )}

          <label htmlFor="email" className="p-1 text-sm font-semibold pt-5">
            이메일
          </label>
          <input
            type="text"
            id="email"
            placeholder="이메일"
            className="w-full border border-gray-300 h-11 p-2 rounded-lg mb-5"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500 mb-0">
              {errors.email?.message?.toString()}
            </p>
          )}

          <label htmlFor="password" className="p-1 text-sm font-semibold">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            className="w-full border border-gray-300 h-11 p-2 rounded-lg mb-1"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">
              {errors.password?.message?.toString()}
            </p>
          )}

          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호 확인"
            className="w-full border border-gray-300 h-11 p-2 rounded-lg mb-5"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500 mb-0">
              {errors.confirmPassword?.message?.toString()}
            </p>
          )}

          <label htmlFor="dept" className="p-1 text-sm font-semibold">
            학과
          </label>
          <Controller
            name="selectedDept"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                placeholder={placeholder}
                isClearable
                className="h-12"
              />
            )}
          />
          {errors.selectedDept?.message && (
            <p className="text-red-500">
              {errors.selectedDept?.message?.toString()}
            </p>
          )}

          <div className="w-full flex flex-col items-center mt-8">
            <button
              type="submit"
              className="bg-emerald-500 flex h-11 rounded-xl text-white justify-center text-center items-center w-full font-medium text-lg hover:bg-emerald-600 transition-colors"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}