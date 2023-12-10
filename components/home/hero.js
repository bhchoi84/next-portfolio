import Animation from "../animation";
import Link from 'next/link'
export default function Hero() {
    return (
        <>
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요. Bottlehoony 입니다.
                    <br className="hidden lg:inline-block"/>모르는게 너무 많아...ㅠㅠ
                </h1>
                <p className="mb-8 leading-relaxed">
                    외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}