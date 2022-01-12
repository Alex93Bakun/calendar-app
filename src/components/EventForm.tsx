import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
    const { Option } = Select;
    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: '',
    } as IEvent);
    const { user } = useTypedSelector((state) => state.auth);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({ ...event, date: formatDate(date?.toDate()) });
        }
    };

    const submitForm = () => {
        props.submit({ ...event, author: user.username });
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={submitForm}
        >
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) =>
                        setEvent({
                            ...event,
                            description: e.target.value,
                        })
                    }
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[
                    rules.required(),
                    rules.isDateAfter('Нельзя создать собітие в прошлом'),
                ]}
            >
                <DatePicker onChange={(date) => selectDate(date)} />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select
                    onChange={(guest: string) => setEvent({ ...event, guest })}
                    placeholder="Select a person"
                >
                    {props.guests.map((guest) => (
                        <Option value={guest.username} key={guest.username}>
                            {guest.username}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
                <Row justify="end">
                    <Button type="primary" htmlType="submit">
                        Добавить событие
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default EventForm;
