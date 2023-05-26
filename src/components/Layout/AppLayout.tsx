import { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { CSS_TYPE } from "@styles/styles";
import homeIcon from '@icons/home_white.svg';
import scheduleIcon from '@icons/calendar_white.svg';
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';

const AppLayout = ({ children }: PropsWithChildren) => {

	const [isNavSpread, setIsNavSpread] = useState(false);
	const router = useRouter();
	const pathName = usePathname();
	const firstPathName = pathName.split('/')[1];

	console.log(pathName);

	return (
		<>
			{firstPathName === 'login' ? (
				<>{children}</>
			) : (
				<LayoutContainer>
					<NavContainer>
						<nav>
							<div>로고</div>
							<NavLists>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>홈</span>
								</NavList>
								<NavList>
									<Image
										src={scheduleIcon}
										alt="schedule icon"
										width={20}
										height={20}
									/>
									<span>일정 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>회원 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>코치 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>코트 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>레슨권 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>커뮤니티 관리</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>통계</span>
								</NavList>
								<NavList>
									<Image
										src={homeIcon}
										alt="home icon"
										width={20}
										height={20}
									/>
									<span>설정</span>
								</NavList>
							</NavLists>
						</nav>
					</NavContainer>
					<MainContainer>
						<NavControlBtnWrapper>
							<NavControlBtn
								src={doubleArrowLeft}
								alt="double arrow left"
								width={28}
								height={28}
								onClick={() => setIsNavSpread(!isNavSpread)}
								rotate={isNavSpread ? "rotate(180deg)" : "rotate(0deg)"}
							/>
						</NavControlBtnWrapper>
						{children}
					</MainContainer>
				</LayoutContainer>
			)}
		</>
	);
};

const LayoutContainer = styled.div({
	width: '100vw',
	height: '100vh',
	backgroundColor: 'var(--business-color)',
	position: 'relative',
	color: 'var(--basic-white-color)',
	padding: '20px',
	display: 'flex',
});
const NavContainer = styled.div({
	position: 'relative',
	width: '12%',
	height: 'calc(100vh - 48px)',
	padding: '12px',
});
const NavLists = styled.ul({});
const NavList = styled.li({
	display: 'flex',
	alignItems: 'center',
	fontSize: '16px',
	span: {
		margin: '0 0 0 12px',
	},
});
const MainContainer = styled.main({
	position: 'relative',
	width: '88%',
	height: 'calc(100vh - 48px)',
	backgroundColor: 'var(--basic-white-color)',
	borderRadius: '12px',
});
const NavControlBtnWrapper = styled.i({
	position: "relative",
	display: "inline-block",
	width: "36px",
	height: "36px",
	backgroundColor: 'var(--basic-white-color)',
	left: "-36px",
	top: "20px",
	borderTopLeftRadius: "12px",
	borderBottomLeftRadius: "12px",
	cursor: "pointer"
})
const NavControlBtn = styled(Image)<CSS_TYPE>(
	{
		position: "absolute",
		top: "50%",
		left: "50%",
		transition: "all 0.3s ease-out"
	},
	props => ({
		transform: "translate(-50%, -50%) " + props.rotate
	})
)

export default AppLayout;