import reflex as rx
from portafolio.components.heading import heading
from portafolio.data import Technology
from portafolio.styles.styles import EmSize, Size


def tech_stack(technologies: list[Technology]) -> rx.Component:
    return rx.vstack(
        heading("Technologies"),
        rx.flex(
            *[
                rx.badge(
                    rx.box(
                        class_name=technology.icon,
                        font_size="24px"
                    ),
                    rx.text(technology.name),
                    size="2"
                )
                for technology in technologies
            ],
            wrap="wrap",
            spacing=Size.SMALL.value
        ),
        spacing=Size.DEFAULT.value
    )


def knowledge(knowledge: list[Technology]) -> rx.Component:
    return rx.vstack(
        heading("Knowledge"),
        rx.flex(
            *[
                rx.badge(
                    rx.box(
                        class_name=technology.icon,
                        font_size="24px"
                    ) if technology.icon != "favicon.ico" else rx.image(src=technology.icon,
                                                                        width="25%"),
                    rx.text(technology.name),
                    size="2"
                )
                for technology in knowledge
            ],
            wrap="wrap",
            spacing=Size.SMALL.value
        ),
        spacing=Size.DEFAULT.value
    )