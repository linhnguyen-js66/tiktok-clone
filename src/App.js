import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@routes/index';
import DefaultLayout from '@components/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        let Layout = DefaultLayout;
                        if (route?.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route?.component;
                        return (
                            <Route
                                path={route?.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
