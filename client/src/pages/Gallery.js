import React from 'react';

function Gallery() {
    return(
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={5}>
                <Sider className="sider" />
            </Col>
            <Col className="gutter-row" span={19}>
                <TiledImages />
            </Col>
        </Row>
        <CornerImage />
    </div>
    )
}