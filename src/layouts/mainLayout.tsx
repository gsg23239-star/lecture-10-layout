import Header from "../components/Header.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
`;

function MainLayout() {
    return (
        <Wrap>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </Wrap>
    );
}

export default MainLayout;